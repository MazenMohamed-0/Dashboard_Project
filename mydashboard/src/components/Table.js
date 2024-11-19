// Table.js
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Table = () => {
    const columns = [
        {
            name: '',
            selector: row => row.Avatar,
            cell: row => (
                <img
                    src={row.Avatar}
                    alt="Avatar"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        marginRight: '10px'
                    }}
                />
            ),
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.Email,
            sortable: true
        },
        {
            name: 'User',
            selector: row => row.User,
            sortable: true
        },
        {
            name: 'Account Type',
            selector: row => row.AccountType,
            cell: row => (
                <div
                    style={{
                        borderRadius: '10px',
                        border: `2px solid ${row.AccountType === 'Business' ? '#1c6b92' : 'gray'}`, // Conditional border color
                        padding: '7px 20px',
                        display: 'inline-block', 
                        color: 'black', 
                    }}
                >
                    {row.AccountType}
                </div>
            ),
            sortable: true
        },
        {
            name: 'Added Date',
            selector: row => row.AddedDate,
            sortable: true
        },
        {
            name: 'Account Status',
            selector: row => row.AccountStatus,
            cell: row => (
                <div className="d-flex align-items-center">
                      <label className="switch">
                        <input
                            type="checkbox"
                            checked={row.AccountStatus === 'Active'}
                            onChange={() => toggleStatus(row.Email)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span
                        className={`badge ${row.AccountStatus === 'Active' ? 'bg-success' : 'bg-danger'} me-2`}
                    >
                        {row.AccountStatus}
                    </span>
                </div>
            ),
            sortable: true
        },
        {
            name: 'Action',
            selector: row => row.Action,
            cell: row => (
                <button 
                    style={{
                        backgroundColor: '#1c6b92', // Button color
                        color: 'white', // Text color
                        border: 'none', // Remove default border
                        borderRadius: '5px', // Rounded corners
                        padding: '10px 10px', // Padding for the button
                        cursor: 'pointer' // Change cursor to pointer on hover
                    }}
                    onClick={() => handleViewProfile(row.Email)} // Assuming you have a function to handle the click
                >
                    View Profile
                </button>
            ),
            sortable: true
        },
    ];

    const data = [
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'michael.jordan@gmail.com',
            User: 'Michael Jordan',
            AccountType: 'Business',
            AddedDate: '15/05/2020',
            AccountStatus: 'Active',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'serena.williams@gmail.com',
            User: 'Serena Williams',
            AccountType: 'Personal',
            AddedDate: '21/08/2021',
            AccountStatus: 'Inactive',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'leonardo.dicaprio@yahoo.com',
            User: 'Leonardo DiCaprio',
            AccountType: 'Business',
            AddedDate: '03/03/2022',
            AccountStatus: 'Active',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'oprah.winfrey@yahoo.com',
            User: 'Oprah Winfrey',
            AccountType: 'Personal',
            AddedDate: '12/07/2020',
            AccountStatus: 'Inactive',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'elon.musk@gmail.com',
            User: 'Elon Musk',
            AccountType: 'Business',
            AddedDate: '05/01/2023',
            AccountStatus: 'Active',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'bill.gates@gmail.com',
            User: 'Bill Gates',
            AccountType: 'Business',
            AddedDate: '08/11/2019',
            AccountStatus: 'Active',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'taylor.swift@yahoo.com',
            User: 'Taylor Swift',
            AccountType: 'Personal',
            AddedDate: '20/02/2021',
            AccountStatus: 'Inactive',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'justin.bieber@hotmail.com',
            User: 'Justin Bieber',
            AccountType: 'Personal',
            AddedDate: '11/09/2020',
            AccountStatus: 'Inactive',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'jeff.bezos@gmail.com',
            User: 'Jeff Bezos',
            AccountType: 'Business',
            AddedDate: '02/06/2022',
            AccountStatus: 'Active',
            Action: 'View Profile',
        },
        {
            Avatar: 'https://via.placeholder.com/40', 
            Email: 'rihanna@yahoo.com',
            User: 'Rihanna',
            AccountType: 'Personal',
            AddedDate: '14/12/2021',
            AccountStatus: 'Inactive',
            Action: 'View Profile',
        }
    ];

    const [records, setRecords] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilter = () => {
        const newData = data.filter(row => {
            return row.User.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setRecords(newData);
    };

    const toggleStatus = (email) => {
        const updatedRecords = records.map(record => {
            if (record.Email === email) {
                return {
                    ...record,
                    AccountStatus: record.AccountStatus === 'Active' ? 'Inactive' : 'Active'
                };
            }
            return record;
        });
        setRecords(updatedRecords);
    };
const handleViewProfile = (email) => {
    // Logic to handle viewing profile, e.g., navigating to a profile screen
    console.log(`Viewing profile for: ${email}`);
};

    return (
        <div className='container mt-5'>
            <div className='text-end'>
                <input 
                    type="text" 
                    value={searchTerm} // Controlled input for search term
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search User"
                    className="custom-search-input"
                />
                <button 
                    onClick={handleFilter} 
                    className='btn btn-primary ms-2 custom-search-button'>
                    Search
                </button>
            </div>
            <DataTable
                columns={columns}
                data={records}
                selectableRows
                fixedHeader
                pagination
            />
        </div>
    );
};

export default Table;
