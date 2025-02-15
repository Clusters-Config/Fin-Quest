	import { AsyncHandler } from "../utils/AsyncHandler.js";
	import { Apierror } from "../utils/Apierror.js";
	import { SignupSchema } from "../models/signup.js";
	import { ResultSchema } from "../models/result.js";

	const resultpage = AsyncHandler(async (req, res) => {
	let { userscore, email, path, mods, type } = req.body;

	const resultuser = await ResultSchema.findOne({ email: email });


	if (!email) {
		throw new Apierror(404, "User not found");
	}


	if((type=="account"&& mods == "mod1" && path == "path1")) {
		if (resultuser) {
		resultuser.accouting[0].mod1.path1 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		result.accouting[0].mod1.path1 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "account" && mods == "mod1" && path == "path2")) {
		if (resultuser) {
		resultuser.accouting[0].mod1.path2 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		result.accouting[0].mod1.path2 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "account" && mods == "mod2" && path == "path1")) {
		if (resultuser) {
		resultuser.accouting[0].mod2.path1 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		result.accouting[0].mod2.path1 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "account" && mods == "mod2" && path == "path2")) {
		if (resultuser) {
		resultuser.accouting[0].mod2.path2 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		result.accouting[0].mod2.path2 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "finance" && mods == "mod1" && path == "path1")) {
		if (resultuser) {
		resultuser.finance[0].mod1.path1 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod1.path1 = userscore;
		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "finance" && mods == "mod1" && path == "path2")) {
		if (resultuser) {
		resultuser.finance[0].mod1.path2 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod1.path2 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "finance" && mods == "mod2" && path == "path1")) {
		if (resultuser) {
		resultuser.finance[0].mod2.path1 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod2.path1 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "finance" && mods == "mod2" && path == "path2")) {
		if (resultuser) {
		resultuser.finance[0].mod2.path2 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod2.path2 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type =="finance" && mods == "mod3" && path == "path1")) {
		if (resultuser) {
		resultuser.finance[0].mod3.path1 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod3.path1 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "finance" && mods == "mod3" && path == "path2")) {
		if (resultuser) {
		resultuser.finance[0].mod3.path2 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod3.path2 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type =="finance" && mods == "mod4" && path == "path1")) {
		if (resultuser) {
		resultuser.finance[0].mod4.path1 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod4.path1 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "finance" && mods == "mod4" && path == "path2")) {
		if (resultuser) {
		resultuser.finance[0].mod4.path2 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod4.path2 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	else if ((type == "finance" && mods == "mod4" && path == "path3")) {
		if (resultuser) {
		resultuser.finance[0].mod4.path3 = userscore;
		await resultuser.save();
		} else {
		const result = new ResultSchema({
			email: email,
			accouting: [{}],
			finance: [{}],
		});
		resultuser.finance[0].mod4.path3 = userscore;

		await result.save();
		console.log("Account updated");
		}
	}

	res.json({ message: resultuser });
	});

	export default resultpage;
