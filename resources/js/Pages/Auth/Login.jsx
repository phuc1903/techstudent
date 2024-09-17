import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormInertia } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Button from "@/Components/Button/Index";
import Input from "@/Components/Inputs/Index";
import LayoutUser from "@/Layouts/LayoutUser/Index";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useReactHookForm({
        mode: "onChange",
        reValidateMode: "onSubmit",
    });

    const { data, setData, post, errors: errorsInertia, processing } = useFormInertia({
        email: "",
        password: "",
    });

    const fieldEmail = {
        register: register("email", {
            required: "Vui lòng nhập email",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Vui lòng nhập địa chỉ email hợp lệ",
            },
        }),
        status: errors?.email || errorsInertia?.email ? "error" : "success",
        message: errors?.email?.message || errorsInertia?.email,
    };

    const fieldPassword = {
        register: register("password", {
            required: "Vui lòng nhập mật khẩu",
            minLength: {
                value: 5,
                message: "Vui lòng nhập ít nhất 5 ký tự",
            },
        }),
        status: errors?.password || errorsInertia?.password && "error",
        message: errors?.password?.message || errorsInertia?.password,
    };

    const onSubmit = (formData) => {
        setData(formData);
    };

    useEffect(() => {
        if (data.email && data.password) {
            post(route("login.store"));
        }
    }, [data]);

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <Head title="Login" />
            <div className="">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex max-w-md mx-auto flex-col"
                >
                    <Input
                        label="Email"
                        placeholder="Email address ..."
                        type="email"
                        register={fieldEmail.register}
                        status={fieldEmail.status}
                        message={fieldEmail.message}
                        required
                        onBlur={() => trigger("email")}
                    />

                    <Input
                        label="Password"
                        placeholder="Password ..."
                        type={showPassword ? "text" : "password"}
                        register={fieldPassword.register}
                        status={fieldPassword.status}
                        message={fieldPassword.message}
                        required
                        onBlur={() => trigger("password")} 
                        iconRight={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                onClick={handleShowPassword}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={
                                        showPassword
                                            ? "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                            : "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    }
                                />
                            </svg>
                        }
                    />

                    <Button rounded={true} disabled={processing}>
                        {processing ? "Đang đăng nhập..." : "Đăng nhập"}
                    </Button>
                </form>
            </div>
        </>
    );
}

Login.layout = (page) => <LayoutUser children={page} />;

export default Login;
