// src/components/Preferences.jsx
import '../mytailwind.css'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FiUser, FiBell, FiMic, FiCreditCard } from 'react-icons/fi';

function Preferences() {
    // Account Settings state
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    // Notifications state
    const [emailUpdates, setEmailUpdates] = useState(true);
    const [weeklyReports, setWeeklyReports] = useState(false);

    // Coach Customization state
    const [coachTone, setCoachTone] = useState('Normal');
    const [coachVoice, setCoachVoice] = useState('Female');

    // Payments & Plan state
    const [currentPlan, setCurrentPlan] = useState('Free');

    // Toggle switch component
    const ToggleSwitch = ({ enabled, onChange, label }) => {
        return (
            <div className="flex items-center justify-between py-2">
                <span className="text-gray-700">{label}</span>
                <button
                    onClick={() => onChange(!enabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-[#1B638A]' : 'bg-gray-300'}`}
                >
          <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
          />
                </button>
            </div>
        );
    };

    // Radio option component
    const RadioOption = ({ name, value, currentValue, onChange, label }) => {
        return (
            <div className="flex items-center mb-2">
                <input
                    id={`${name}-${value}`}
                    type="radio"
                    name={name}
                    value={value}
                    checked={currentValue === value}
                    onChange={() => onChange(value)}
                    className="h-4 w-4 text-[#1B638A] focus:ring-[#1B638A]"
                />
                <label htmlFor={`${name}-${value}`} className="ml-2 text-gray-700">
                    {label}
                </label>
            </div>
        );
    };

    return (
        <div className="flex">
            <Sidebar />

            <div className="ml-64 w-full transition-all duration-300">
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <h2 className="text-4xl font-bold text-center text-[#1B638A] mb-12">Your Preferences</h2>

                    {/* Account Settings Card */}
                    <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <FiUser className="text-[#1B638A] text-xl mr-2" />
                                <h3 className="text-2xl font-bold">Account Settings</h3>
                            </div>

                            <div className="space-y-4 pl-2">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1B638A]"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1B638A]"
                                    />
                                </div>

                                <ToggleSwitch
                                    enabled={twoFactorEnabled}
                                    onChange={setTwoFactorEnabled}
                                    label="Enable 2FA"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notifications Card */}
                    <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <FiBell className="text-[#1B638A] text-xl mr-2" />
                                <h3 className="text-2xl font-bold">Notifications</h3>
                            </div>

                            <div className="space-y-4 pl-2">
                                <ToggleSwitch
                                    enabled={emailUpdates}
                                    onChange={setEmailUpdates}
                                    label="Email updates"
                                />
                                <ToggleSwitch
                                    enabled={weeklyReports}
                                    onChange={setWeeklyReports}
                                    label="Weekly progress reports"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Coach Customization Card */}
                    <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <FiMic className="text-[#1B638A] text-xl mr-2" />
                                <h3 className="text-2xl font-bold">Coach Customization</h3>
                            </div>

                            <div className="space-y-4 pl-2">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Tone</label>
                                    <div className="space-y-2">
                                        <RadioOption name="tone" value="Friendly" currentValue={coachTone} onChange={setCoachTone} label="Friendly" />
                                        <RadioOption name="tone" value="Normal" currentValue={coachTone} onChange={setCoachTone} label="Normal" />
                                        <RadioOption name="tone" value="Strict" currentValue={coachTone} onChange={setCoachTone} label="Strict" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Voice</label>
                                    <div className="space-y-2">
                                        <RadioOption name="voice" value="Male" currentValue={coachVoice} onChange={setCoachVoice} label="Male" />
                                        <RadioOption name="voice" value="Female" currentValue={coachVoice} onChange={setCoachVoice} label="Female" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payments & Plan Card */}
                    <div className="mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <FiCreditCard className="text-[#1B638A] text-xl mr-2" />
                                <h3 className="text-2xl font-bold">Payments & Plan</h3>
                            </div>

                            <div className="space-y-4 pl-2">
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Current Plan</label>
                                    <select
                                        value={currentPlan}
                                        onChange={(e) => setCurrentPlan(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1B638A]"
                                    >
                                        <option value="Free">Free</option>
                                        <option value="Pro">Pro</option>
                                        <option value="Premium">Premium</option>
                                    </select>
                                </div>

                                {currentPlan !== 'Free' && (
                                    <div className="mt-4">
                                        <button className="bg-[#1B638A] text-white py-2 px-4 rounded-lg hover:bg-[#5bc5cf] font-bold transition">
                                            Manage Subscription
                                        </button>
                                    </div>
                                )}

                                {currentPlan === 'Free' && (
                                    <div className="mt-4">
                                        <button className="bg-[#1B638A] text-white py-2 px-4 rounded-lg hover:bg-[#5bc5cf] font-bold transition">
                                            Upgrade Plan
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Save Changes Button */}
                    <div className="flex justify-center">
                        <button
                            className="bg-[#1B638A] text-white py-3 px-8 rounded-lg hover:bg-[#5bc5cf] font-bold transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preferences;