"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactOne = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Email sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('An error occurred while sending email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-secondary rounded-r-[10px] p-[40px] text-white flex flex-col gap-14 w-full'>
      <div className="flex flex-col gap-4">
        <h1 className='text-white text-2xl font-semibold'>Get In Touch</h1>
        <p className='text-[14px] leading-[26px] font-normal'>
          Personal Tax Planning: Our tax consultants work closely with individuals
          to develop comprehensive tax plans tailored to their unique financial
          situations.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[17px] text-slate-700'>
        <div className='flex gap-[22px] w-full xs:flex-col'>
          <input
            type='text'
            placeholder='First Name'
            name='firstname'
            value={formData.firstname}
            onChange={handleChange}
            className='bg-[#F6F6F6] py-3 px-3 rounded-lg w-full'
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
            className='bg-[#F6F6F6] py-3 px-3 rounded-lg w-full '
          />
        </div>
        <div className='flex gap-[22px] w-full xs:flex-col'>
          <input
            type='email'
            placeholder='Enter Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='bg-[#F6F6F6] py-3 px-3 rounded-lg w-full'
          />
          <input
            type='text'
            placeholder='Enter Phone Number'
            name='telephone'
            className='bg-[#F6F6F6] py-3 px-3 rounded-lg w-full'
          />
        </div>
        <input
          type='text'
          placeholder='Enter Subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          className='bg-[#F6F6F6] py-3 px-3 rounded-lg'
        />
        <textarea
          name='message'
          placeholder='Enter Message'
          value={formData.message}
          onChange={handleChange}
          className='bg-[#F6F6F6] h-[134px] px-4 py-4 rounded-lg'
        />
        <button type='submit' className='glassmorphism text-white py-4 rounded-[10px]'>
          {loading ? 'Sending...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
};

export default ContactOne;
