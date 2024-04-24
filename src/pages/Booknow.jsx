import React, { useState } from 'react';

function Booknow() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        cellPhone: '',
        petName: '',
        petType: 'Cat',
        breed: '',
        reason: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (formData.fullName.trim() === '') {
            newErrors.fullName = 'Full Name is required';
        }
        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (formData.cellPhone.trim() === '') {
            newErrors.cellPhone = 'Cell Phone is required';
        }
        if (formData.petName.trim() === '') {
            newErrors.petName = 'Pet Name is required';
        }
        if (formData.breed.trim() === '') {
            newErrors.breed = 'Breed is required';
        }
        if (formData.reason.trim() === '') {
            newErrors.reason = 'Reason for Appointment is required';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Form is valid, you can submit the data or perform other actions here
            console.log('Form is valid, submit the data:', formData);
        } else {
            console.log('Form has errors:', newErrors);
        }
    };

    return (
        <div className="mt-[10em] bg-green-50 flex justify-center gap-10">
            <div >
                <div className="text-center flex flex-col gap-4 m-4">
                    <p className="text-2xl">Trusted and Amazing Pet Care</p>
                    <h1 className="text-blue-600 text-3xl border-4 border-blue-600/100 ">VETCARE PLUS ANIMAL HOSPITAL</h1>
                </div>
               
                <div className="w-[800px] h-[auto] bg-white rounded-2xl flex flex-col gap-[8em] items-center border border-blue-600">
                    <h1 className="text-blue-600 text-3xl text-center m-6 border-8 border-b-blue-600/100 ">Request a Service</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"
                        />
                        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        <input
                            type="text"
                            placeholder="Cell Phone"
                            name="cellPhone"
                            value={formData.cellPhone}
                            onChange={handleChange}
                            className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"
                        />
                        {errors.cellPhone && <p className="text-red-500">{errors.cellPhone}</p>}
                        <input
                            type="text"
                            placeholder="Pets Name"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"
                        />
                        {errors.petName && <p className="text-red-500">{errors.petName}</p>}
                        <select
                            name="petType"
                            value={formData.petType}
                            onChange={handleChange}
                            className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"
                        >
                            <option>Cart</option>
                            <option>Bird</option>
                            <option>Dog</option>
                            <option>Rabbit</option>
                            <option>Other</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Breed"
                            name="breed"
                            value={formData.breed}
                            onChange={handleChange}
                            className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"
                        />
                        {errors.breed && <p className="text-red-500">{errors.breed}</p>}
                        <input
                            type="text"
                            placeholder="Reason for Appointment"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-[600px] py-4 rounded-2xl text-2xl border border-green-200 outline-none hover:border-blue-600"
                        />
                        {errors.reason && <p className="text-red-500">{errors.reason}</p>}
                        <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-2xl mb-8">REQUEST</button>
                    </form>
                </div>
            </div>
            <div>
                <img src="src/assets/images/pexels-flowerstofox-1870302-removebg-preview.png" width={500} className="mt-[-15%]"/>
            </div>
        </div>
    );
}

export default Booknow;
