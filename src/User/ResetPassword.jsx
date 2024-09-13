import React, { useState, useEffect } from 'react';
import { auth } from '../App';
import { confirmPasswordReset } from 'firebase/auth';
import { useLocation } from 'react-router-dom'; // Assuming you're using React Router
import { message } from 'antd';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const oobCode = new URLSearchParams(location.search).get('oobCode');

    useEffect(() => {
        if (!oobCode) {
            message.error('Invalid or missing reset link.');
        }
    }, [oobCode]);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            message.error('Passwords do not match.');
            return;
        }
        setLoading(true);

        try {
            await confirmPasswordReset(auth, oobCode, newPassword);
            message.success('Password has been reset successfully!');
            // Redirect to login or another page
        } catch (error) {
            console.error('Password Reset Error:', error);
            message.error('Error resetting password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handlePasswordReset}>
                <div>
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
