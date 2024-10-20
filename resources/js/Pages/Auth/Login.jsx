import { useForm as useReactHookForm } from "react-hook-form";
import { Link, useForm as useFormInertia } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Button from "@/Components/Button/Index";
import FieldEmail from "@/Services/AuthServices/FieldEmail";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import FieldPassword from "@/Services/AuthServices/FieldPassword";
import Index from "./Index";
import { Checkbox, Label, Button as ButtonReact } from "flowbite-react";

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

    const {
        data,
        setData,
        post,
        errors: errorsInertia,
        processing,
    } = useFormInertia({
        email: "",
        password: "",
    });

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
            <Index
                image={false}
                title="Đăng nhập vào tài khoản của bạn"
                urlImage="/images/image_sign_in.png"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FieldEmail
                        register={register}
                        errors={errors}
                        errorsInertia={errorsInertia}
                        trigger={trigger}
                    />

                    <FieldPassword
                        register={register}
                        errors={errors}
                        errorsInertia={errorsInertia}
                        handleIcon={handleShowPassword}
                        showPassword={showPassword}
                        trigger={trigger}
                    />
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <Button rounded={true} disabled={processing}>
                                {processing ? "Đang đăng nhập..." : "Đăng nhập"}
                            </Button>
                            <Link
                                className="underline decoration-primary-500 pb-2"
                                href={route("password.request")}
                            >
                                Quên mật khẩu
                            </Link>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex items-center mb-6">
                            <hr className="h-1 w-full" />
                            <span className="px-2 uppercase text-nowrap label-large">
                                Sign in with
                            </span>
                            <hr className="h-1 w-full" />
                        </div>
                        <div className="flex gap-6">
                            <ButtonReact>
                                <HiShoppingCart className=" h-5 w-5" />
                                Buy now
                            </ButtonReact>
                            <ButtonReact>
                                Choose plan
                                <HiOutlineArrowRight className=" h-5 w-5" />
                            </ButtonReact>
                        </div>
                    </div>
                </form>
            </Index>
        </>
    );
}

export default Login;
