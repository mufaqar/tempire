"use client";

import React, { useState, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { client } from "@/config/client";

type FormInputs = {
    name: string;
    email: string;
    position: string;
    rateing: string;
    message: string;
};

const RateUsForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [imageAsset, setImageAsset] = useState<any>(null);
    const [wrongImageType, setWrongImageType] = useState<boolean>(false);
    const [status, setStatus] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm<FormInputs>();

    const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        const validTypes = [
            "image/png",
            "image/svg+xml",
            "image/jpeg",
            "image/gif",
            "image/tiff",
        ];

        if (validTypes.includes(selectedFile.type)) {
            setWrongImageType(false);
            setLoading(true);

            client.assets
                .upload("image", selectedFile, {
                    contentType: selectedFile.type,
                    filename: selectedFile.name,
                })
                .then((document: any) => {
                    setImageAsset(document);
                    setLoading(false);
                })
                .catch((error: Error) => {
                    console.error("Upload failed:", error.message);
                    setLoading(false);
                });
        } else {
            setWrongImageType(true);
            setLoading(false);
        }
    };

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const { email, message, name, position, rateing } = data;

        const doc = {
            _type: "rateing",
            icon: {
                _type: "image",
                asset: {
                    _type: "reference",
                    _ref: imageAsset?._id,
                },
            },
            name,
            email,
            position,
            star: rateing,
            review: message,
        };

        client.create(doc).then((res: any) => {
            console.log(`Review is Created ${res._id}`);
            resetField("name");
            resetField("email");
            resetField("position");
            resetField("rateing");
            resetField("message");
            setImageAsset(null);
            setStatus(200);
        });
    };

    return (
        <section id="contact-us" className="text-heading body-font relative">
            <div className="container px-4 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="md:w-1/2 mx-auto bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-heading">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: true })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-heading py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">Name is required</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-heading">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-heading py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">Email is required</p>
                            )}
                        </div>

                        {/* Company Logo */}
                        <div className="relative mb-4">
                            <label htmlFor="company-logo" className="leading-7 block text-sm text-heading">
                                Company Logo

                                <span className="block">
                                    <span className="inline-block border bg-[#f0f0f0] w-fit py-[1px] px-1.5 mr-1 rounded text-heading">Choose File </span>
                                    <span className="inline-block">No File choose</span>
                                </span>
                            </label>
                            <input
                                type="file"
                                id="company-logo"
                                name="company-logo"
                                onChange={uploadImage}
                                className="hidden"
                            />
                            {wrongImageType && (
                                <p className="text-red-500 text-sm">
                                    Please upload a valid image type
                                </p>
                            )}
                        </div>

                        {/* Position */}
                        <div className="relative mb-4">
                            <label
                                htmlFor="position"
                                className="leading-7 text-sm text-heading"
                            >
                                Position/Designation
                            </label>
                            <input
                                type="text"
                                id="position"
                                {...register("position")}
                                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-heading py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Enter your position"
                            />
                        </div>

                        {/* Rating */}
                        <div className="relative mb-4">
                            <label htmlFor="rateing" className="leading-7 text-sm text-heading">
                                Rating
                            </label>
                            <select
                                id="rateing"
                                {...register("rateing")}
                                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-heading py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num}>{num}</option>
                                ))}
                            </select>
                        </div>

                        {/* Review */}
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-heading"
                            >
                                Your Review
                            </label>
                            <textarea
                                id="message"
                                {...register("message")}
                                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-heading py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                placeholder="Enter your review"
                            />
                        </div>

                        {/* Status */}
                        {status === 200 && (
                            <p className="text-green-500 text-sm mb-4">Review Submitted!</p>
                        )}

                        {/* Submit */}
                        <input
                            type="submit"
                            value={loading ? "Submitting..." : "Submit"}
                            disabled={loading}
                            className="text-white hover:text-primary bg-primary border-2 border-primary py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg cursor-pointer"
                        />

                        <p className="text-xs text-gray-500 mt-3">
                            All inquiries will be addressed within 24 hours by a Tempire® representative.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RateUsForm;
