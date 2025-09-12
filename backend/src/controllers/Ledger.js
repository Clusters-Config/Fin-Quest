import supabase from "../db/supabase.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

const addledger = AsyncHandler(async (req, res) => {
    const { data, email } = req.body;

    // 1. Get the latest balance for this email
    let { data: lastRow, error: err } = await supabase
        .from("Ledger")
        .select("balance")
        .eq("email", email)
        .order("created_at", { ascending: false }) // get latest entry
        .limit(1)
        .maybeSingle();

    if (err) {
        console.error("❌ Error fetching balance:", err.message);
        return res.status(500).json({ success: false, error: err.message });
    }

    let balance = lastRow?.balance || 0; // start from last balance, or 0 if none

    // 2. Calculate new balance
    if (data.debit && data.debit != 0) {
        balance = balance - data.debit;
    }
    if (data.credit && data.credit != 0) {
        balance = balance + data.credit;
    }

    // 3. Insert new ledger row with updated balance
    const { data: LedgerData, error } = await supabase
        .from("Ledger")
        .insert({
            date: data.date,
            account: data.account,
            debit: data.debit,
            credit: data.credit,
            email: email,
            balance: balance
        })
        .select()
        .single();

    if (error) {
        console.error("❌ Insert error:", error.message);
        return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(201).json({ success: true, data: LedgerData });
});


const getledger = AsyncHandler(async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: "Email is required" });
    }

    const { data, error } = await supabase
        .from("Ledger")
        .select("*")
        .eq("email", email)
        .order("date", { ascending: true });

    if (error) {
        console.error(error.message);
        return res.status(500).json({ success: false, error: error.message });
    }

    // console.log(data)
    return res.send(data)
})

export { addledger, getledger };
