import React, { useState, useRef, useEffect } from "react";
import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormInertia } from "@inertiajs/react";
import Image from "@/Components/Images/Index";
import LayoutInstructor from "@/Layouts/LayoutInstructor/Index";
import { Head } from "@inertiajs/react";
import CreateField from "@/Services/AuthServices/CreateField";
import InputText from "@/Components/Inputs/InputText";
import Button from "@/Components/Button/Index";

function Settings({user}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useReactHookForm({
        mode: "onChange",
        reValidateMode: "onSubmit",
    });

    const {
        data,
        setData,
        post,
        errors: errorsInertia,
        processing,
    } = useFormInertia({
        fullname: user.fullname || "",
        username: user.username || "",
        phone: user.phone || "",
        title: user.title || "",
        bio: user.bio || "",
    });
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);

    const handleChoseAvatar = () => {
        fileInputRef.current.click();
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const fieldFullname = CreateField({
        name: "fullname",
        register,
        errors,
        errorsInertia,
        validationRules: {
            required: "Vui lòng nhập họ tên của bạn",
            minLength: {
                value: 2,
                message: "Vui lòng nhập ít nhất 2 ký tự",
            },
            maxLength: {
                value: 40,
                message: "Vui lòng nhập nhiều nhất 40 ký tự",
            },
        },
    });

    const fieldUserName = CreateField({
        name: "username",
        register,
        errors,
        errorsInertia,
        validationRules: {
            required: "Vui lòng nhập tên tài khoản",
            minLength: {
                value: 5,
                message: "Vui lòng nhập ít nhất 5 ký tự",
            },
            maxLength: {
                value: 50,
                message: "Vui lòng nhập nhiều nhất 50 ký tự",
            },
        },
    });

    const fieldPhone = CreateField({
        name: "phone",
        register,
        errors,
        errorsInertia,
        validationRules: {
            required: "Vui lòng nhập số điện thoại",
            minLength: {
                value: 5,
                message: "Vui lòng nhập ít nhất 5 ký tự",
            },
            maxLength: {
                value: 11,
                message: "Vui lòng nhập nhiều nhất 11 ký tự",
            },
        },
    });
    
    const fieldTitle = CreateField({
        name: "title",
        register,
        errors,
        errorsInertia,
        validationRules: {
            minLength: {
                value: 5,
                message: "Vui lòng nhập ít nhất 5 ký tự",
            },
            maxLength: {
                value: 11,
                message: "Vui lòng nhập nhiều nhất 11 ký tự",
            },
        },
    });
    const fieldBio = CreateField({
        name: "bio",
        register,
        errors,
        errorsInertia,
        validationRules: {
            minLength: {
                value: 5,
                message: "Vui lòng nhập ít nhất 5 ký tự",
            },
            maxLength: {
                value: 11,
                message: "Vui lòng nhập nhiều nhất 11 ký tự",
            },
        },
    });

    const onSubmit = (formData) => {
        setData(formData);
    };

    useEffect(() => {
        if (data.fullname && data.username && data.phone) {
            post(route("setting.update"));
        }
    }, [data]);

    return (
        <>
            <Head title="Setting" />
            <div className="flex gap-6 size-full">
                <form
                    className="bg-white flex flex-col gap-[18px] size-full p-10"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="grid gap-6 grid-cols-12">
                        <div className="flex flex-col col-span-9">
                            <h3 className="heading-04 mb-3">
                                Account Settings
                            </h3>
                            <div className="flex flex-col gap-[18px]">
                                <InputText
                                    label="Họ tên của bạn"
                                    placeholder="Nhập họ tên của bạn"
                                    register={fieldFullname.register}
                                    status={fieldFullname.status}
                                    message={fieldFullname.message}
                                    required
                                    onChange={() => trigger(fieldFullname.name)}
                                />
                                <InputText
                                    label="Tên tài khoản"
                                    placeholder="Nhập tên tài khoản của bạn"
                                    classes="mb-3"
                                    register={fieldUserName.register}
                                    status={fieldUserName.status}
                                    message={fieldUserName.message}
                                    required
                                    onChange={() => trigger(fieldUserName.name)}
                                />
                                <InputText
                                    label="Số điện thoại"
                                    placeholder="Nhập số điện thoại của bạn"
                                    classes="mb-3"
                                    register={fieldPhone.register}
                                    status={fieldPhone.status}
                                    message={fieldPhone.message}
                                    required
                                    onChange={() => trigger(fieldPhone.name)}
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="bg-gray-50 flex flex-col gap-6 p-8">
                                <div className="relative h-[250px]">
                                    <Image
                                        classes="size-full object-cover"
                                        src={imageSrc}
                                    />
                                    <div
                                        onClick={handleChoseAvatar}
                                        className="btn flex justify-center p-3 bg-black opacity-50 transition hover:opacity-80 gap-2 absolute bottom-0 left-0 right-0 cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6 text-white"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                                            />
                                        </svg>
                                        <span className="body-medium-500 text-white">
                                            Upload Photo
                                        </span>
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        hidden
                                        onChange={handleAvatarChange}
                                    />
                                </div>
                                <span className="body-small-400 text-gray-600">
                                    Image size should be under 1MB and image
                                    ration needs to be 1:1
                                </span>
                            </div>
                        </div>
                    </div>
                    <InputText
                        label="Tiêu đề"
                        placeholder="Nhập tiêu đề của bạn"
                        classes="mb-3"
                        register={fieldTitle.register}
                        status={fieldTitle.status}
                        message={fieldTitle.message}
                        required
                        onChange={() => trigger(fieldTitle.name)}
                    />
                    <InputText
                        label="Biography"
                        placeholder="Nhập biography của bạn"
                        classes="mb-3"
                        register={fieldBio.register}
                        status={fieldBio.status}
                        message={fieldBio.message}
                        required
                        onChange={() => trigger(fieldBio.name)}
                    />

                    <Button disabled={processing}>{processing ? "Đang lưu" : "Lưu thay đổi"}</Button>
                </form>
            </div>
        </>
    );
}

Settings.layout = (page) => <LayoutInstructor children={page} />;

export default Settings;
