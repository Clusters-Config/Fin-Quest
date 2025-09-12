import React, { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2, FileText, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';

const LedgerBuilder = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2025-09-12',
      account: 'Cash',
      debit: 2000,
      credit: 0,
      balance: 2000,
      description: 'Opening Balance'
    },
    {
      id: 2,
      date: '2025-09-12',
      account: 'Purchase',
      debit: 0,
      credit: 500,
      balance: 1500,
      description: 'Office Supplies'
    },
    {
      id: 3,
      date: '2025-09-12',
      account: 'Sales',
      debit: 1200,
      credit: 0,
      balance: 2700,
      description: 'Product Sale'
    }
  ]);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    account: '',
    debit: '',
    credit: '',
    description: ''
  });

  const [filters, setFilters] = useState({
    search: '',
    account: '',
    dateFrom: '',
    dateTo: ''
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState('ledger');

  const accounts = ['Cash', 'Bank', 'Sales', 'Purchase', 'Expenses', 'Assets', 'Liabilities', 'Equity'];

  // Calculate running balance
  const calculateBalance = (transactions) => {
    let runningBalance = 0;
    return transactions.map(transaction => {
      runningBalance = runningBalance + transaction.debit - transaction.credit;
      return { ...transaction, balance: runningBalance };
    });
  };

  // Filter transactions
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.account.toLowerCase().includes(filters.search.toLowerCase()) ||
                         transaction.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesAccount = !filters.account || transaction.account === filters.account;
    const matchesDateFrom = !filters.dateFrom || transaction.date >= filters.dateFrom;
    const matchesDateTo = !filters.dateTo || transaction.date <= filters.dateTo;
    
    return matchesSearch && matchesAccount && matchesDateFrom && matchesDateTo;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  const handleSubmit = () => {
    if (!formData.account || (!formData.debit && !formData.credit)) return;

    const newTransaction = {
      id: editingId || Date.now(),
      date: formData.date,
      account: formData.account,
      debit: parseFloat(formData.debit) || 0,
      credit: parseFloat(formData.credit) || 0,
      description: formData.description
    };

    if (editingId) {
      setTransactions(prev => 
        calculateBalance(prev.map(t => t.id === editingId ? newTransaction : t))
      );
      setEditingId(null);
    } else {
      setTransactions(prev => calculateBalance([...prev, newTransaction]));
    }

    setFormData({
      date: new Date().toISOString().split('T')[0],
      account: '',
      debit: '',
      credit: '',
      description: ''
    });
  };

  const handleEdit = (transaction) => {
    setFormData({
      date: transaction.date,
      account: transaction.account,
      debit: transaction.debit || '',
      credit: transaction.credit || '',
      description: transaction.description
    });
    setEditingId(transaction.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      setTransactions(prev => calculateBalance(prev.filter(t => t.id !== id)));
    }
  };

  const totalDebit = filteredTransactions.reduce((sum, t) => sum + t.debit, 0);
  const totalCredit = filteredTransactions.reduce((sum, t) => sum + t.credit, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                💼 Ledger Pro
              </h1>
              <div className="hidden md:flex space-x-6">
                <button 
                  onClick={() => setActiveTab('ledger')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === 'ledger' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <FileText size={16} />
                  <span>Ledger</span>
                </button>
                <button 
                  onClick={() => setActiveTab('reports')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === 'reports' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <BarChart3 size={16} />
                  <span>Reports</span>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-IN')}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                  <BarChart3 size={18} className="mr-2" />
                  Quick Stats
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Entries:</span>
                    <span className="font-medium">{transactions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-600">Total Debit:</span>
                    <span className="font-medium text-red-600">₹{totalDebit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-600">Total Credit:</span>
                    <span className="font-medium text-green-600">₹{totalCredit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-900 font-medium">Net Balance:</span>
                    <span className={`font-bold ${(totalDebit - totalCredit) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ₹{(totalDebit - totalCredit).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <FileText size={16} className="mr-2" />
                  Account Types
                </h3>
                {accounts.map(account => {
                  const accountTotal = transactions
                    .filter(t => t.account === account)
                    .reduce((sum, t) => sum + t.debit - t.credit, 0);
                  
                  return (
                    <div key={account} className="flex justify-between text-sm">
                      <span className="text-gray-600">{account}:</span>
                      <span className={`font-medium ${accountTotal >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ₹{Math.abs(accountTotal).toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Add Transaction Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                  <Plus size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingId ? '✏️ Edit Transaction' : '➕ Add New Transaction'}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account</label>
                  <select
                    value={formData.account}
                    onChange={(e) => setFormData(prev => ({ ...prev, account: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                    required
                  >
                    <option value="">Select Account</option>
                    {accounts.map(account => (
                      <option key={account} value={account}>{account}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Debit (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.debit}
                    onChange={(e) => setFormData(prev => ({ ...prev, debit: e.target.value, credit: '' }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Credit (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.credit}
                    onChange={(e) => setFormData(prev => ({ ...prev, credit: e.target.value, debit: '' }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                    placeholder="Transaction description"
                  />
                </div>
                
                <div className="md:col-span-5 flex gap-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {editingId ? '✅ Update Transaction' : '➕ Add Transaction'}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(null);
                        setFormData({
                          date: new Date().toISOString().split('T')[0],
                          account: '',
                          debit: '',
                          credit: '',
                          description: ''
                        });
                      }}
                      className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                  <Filter size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">🔍 Filters & Search</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={filters.search}
                    onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 hover:border-purple-400"
                  />
                </div>
                
                <select
                  value={filters.account}
                  onChange={(e) => setFilters(prev => ({ ...prev, account: e.target.value }))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 hover:border-purple-400"
                >
                  <option value="">All Accounts</option>
                  {accounts.map(account => (
                    <option key={account} value={account}>{account}</option>
                  ))}
                </select>
                
                <input
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) => setFilters(prev => ({ ...prev, dateFrom: e.target.value }))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 hover:border-purple-400"
                  placeholder="From Date"
                />
                
                <input
                  type="date"
                  value={filters.dateTo}
                  onChange={(e) => setFilters(prev => ({ ...prev, dateTo: e.target.value }))}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 hover:border-purple-400"
                  placeholder="To Date"
                />
              </div>
            </div>

            {/* Ledger Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  📊 Ledger Entries
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  📈 Showing {paginatedTransactions.length} of {filteredTransactions.length} transactions
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-100 to-blue-100 sticky top-0">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">📅 Date</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">🏷️ Account Name</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">📤 Debit (₹)</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">📥 Credit (₹)</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">💰 Balance (₹)</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">📝 Description</th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">⚡ Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedTransactions.map((transaction, index) => (
                      <tr key={transaction.id} className={`transition-all duration-200 hover:bg-blue-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(transaction.date).toLocaleDateString('en-IN')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 shadow-sm">
                            {transaction.account}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                          {transaction.debit > 0 ? (
                            <span className="text-red-600">₹{transaction.debit.toLocaleString()}</span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                          {transaction.credit > 0 ? (
                            <span className="text-green-600">₹{transaction.credit.toLocaleString()}</span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-right">
                          <span className={transaction.balance >= 0 ? 'text-green-600' : 'text-red-600'}>
                            ₹{Math.abs(transaction.balance).toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                          {transaction.description || '—'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center space-x-3">
                            <button
                              onClick={() => handleEdit(transaction)}
                              className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-100 transition-all duration-200 transform hover:scale-110"
                              title="Edit Transaction"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(transaction.id)}
                              className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-100 transition-all duration-200 transform hover:scale-110"
                              title="Delete Transaction"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                        <span className="font-medium">
                          {Math.min(startIndex + itemsPerPage, filteredTransactions.length)}
                        </span>{' '}
                        of <span className="font-medium">{filteredTransactions.length}</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              currentPage === i + 1
                                ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedgerBuilder;