import React from 'react';
import { useForm } from 'react-hook-form';
import { client } from '../config/client';
import { useState } from 'react';

export default function RateUsForm() {
  const [loading, setLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState();
  const [wrongImageType, setWrongImageType] = useState(false);
  const [status, setStatus] = useState();

  console.log(
    '🚀 ~ file: RateUsForm.js:9 ~ RateUsForm ~ imageAsset:',
    imageAsset
  );

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    // uploading asset to sanity
    if (
      selectedFile.type === 'image/png' ||
      selectedFile.type === 'image/svg' ||
      selectedFile.type === 'image/jpeg' ||
      selectedFile.type === 'image/gif' ||
      selectedFile.type === 'image/tiff'
    ) {
      setWrongImageType(false);
      setLoading(true);
      client.assets
        .upload('image', selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Upload failed:', error.message);
        });
    } else {
      setLoading(false);
      setWrongImageType(true);
    }
  };

  const onSubmit = (data) => {
    const { email, message, name, position, rateing } = data;
    const doc = {
      _type: 'rateing',
      icon: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset?._id,
        },
      },
      name,
      email,
      position,
      star: rateing,
      review: message,
    };

    client.create(doc).then((res) => {
      console.log(`Review is Created ${res._id}`);
      resetField('name');
      resetField('email');
      resetField('position');
      resetField('rateing');
      resetField('message');
      setImageAsset();
      setStatus(200);
    });
  };

  return (
    <section id="contact-us" className="text-gray-600 body-font relative">
      <div className="container px-4 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="md:w-1/2 mx-auto bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register('name')}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="enter your name "
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register('email')}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="enter your email address "
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 block text-sm text-gray-600"
              >
                Company Logo
              </label>
              <input
                type="file"
                name="upload-image"
                onChange={uploadImage}
                className=""
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="position"
                className="leading-7 text-sm text-gray-600"
              >
                Position/Designation
              </label>
              <input
                type="text"
                id="position"
                name="position"
                {...register('position')}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="enter your position "
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Rateing
              </label>
              <select
                id="rateing"
                name="rateing"
                {...register('rateing')}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="Review"
                className="leading-7 text-sm text-gray-600"
              >
                Your Review
              </label>
              <textarea
                id="Review"
                name="message"
                {...register('message')}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#FDCD60] focus:ring-2 focus:ring-[#FDCD60] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="enter your review"
              ></textarea>
            </div>
            <div>
              {status && (
                <div className="text-semibold mb-2 -mt-2">Review Submited</div>
              )}
            </div>
            <input
              type="submit"
              className="text-white hover:text-[#FDCD60] bg-[#FDCD60] border-2 border-[#FDCD60] py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg"
            />

            <p className="text-xs text-gray-500 mt-3">
              All inquiries will be addressed within 24 hours by a Tempire®
              representative.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
