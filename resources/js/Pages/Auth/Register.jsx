import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormInertia } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Button from "@/Components/Button/Index";
import FieldEmail from "@/Services/AuthServices/FieldEmail";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import FieldPassword from "@/Services/AuthServices/FieldPassword";
import FieldConfirmPassword from "@/Services/AuthServices/FieldConfirmPassword";
import Index from "./Index";
import { Button as ButtonReact } from "flowbite-react";
import CreateField from "@/Services/AuthServices/CreateField";
import InputText from "@/Components/Inputs/InputText";
import CheckBox from "@/Components/Inputs/CheckBox";

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        watch,
    } = useReactHookForm({
        mode: "onChange",
        reValidateMode: "onSubmit",
    });

    const password = watch("password");

    const {
        data,
        setData,
        post,
        errors: errorsInertia,
        processing,
    } = useFormInertia({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        term_condition: "",
    });

    const fieldFirstName = CreateField({
        name: "firstname",
        register,
        errors,
        errorsInertia,
        validationRules: {
            required: "Vui lòng nhập tên của bạn",
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

    const fieldLastName = CreateField({
        name: "lastname",
        register,
        errors,
        errorsInertia,
        validationRules: {
            required: "Vui lòng nhập họ của bạn",
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

    const fieldTermAndCondition = CreateField({
        name: "term_condition",
        register,
        errors,
        errorsInertia,
        validationRules: {
            required: "Bạn phải đồng ý với điều khoản",
        },
    });

    const onSubmit = (formData) => {
        setData(formData);
    };

    useEffect(() => {
        console.log(data);

        if (data.email && data.password) {
            post(route("register.store"));
        }
    }, [data]);

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };
    return (
        <>
            <Head title="Tạo tài khoản" />
            <Index
                image={false}
                title="Tạo tài khoản của bạn"
                urlImage="/images/image_register.png"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-[18px] mb-3">
                        <InputText
                            label="Họ của bạn"
                            placeholder="Nhập họ của bạn"
                            register={fieldLastName.register}
                            status={fieldLastName.status}
                            message={fieldLastName.message}
                            required
                            onChange={() => trigger(fieldLastName.name)}
                        />
                        <InputText
                            label="Tên của bạn"
                            placeholder="Nhập tên của bạn"
                            register={fieldFirstName.register}
                            status={fieldFirstName.status}
                            message={fieldFirstName.message}
                            required
                            onChange={() => trigger(fieldFirstName.name)}
                        />
                    </div>
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
                    <FieldEmail
                        register={register}
                        errors={errors}
                        errorsInertia={errorsInertia}
                        trigger={trigger}
                    />

                    <div className="flex gap-[18px] mb-3">
                        <FieldPassword
                            register={register}
                            errors={errors}
                            errorsInertia={errorsInertia}
                            trigger={trigger}
                            handleIcon={handleShowPassword}
                            showPassword={showPassword}
                        />
                        <FieldConfirmPassword
                            register={register}
                            errors={errors}
                            errorsInertia={errorsInertia}
                            trigger={trigger}
                            handleIcon={handleShowConfirmPassword}
                            showPassword={showConfirmPassword}
                            password={password}
                        />
                    </div>

                    <div className="flex justify-between items-start">
                        <CheckBox
                            label="Chấp nhận điều khoản"
                            register={fieldTermAndCondition.register}
                            status={fieldTermAndCondition.status}
                            message={fieldTermAndCondition.message}
                            required
                            onChange={() => trigger(fieldTermAndCondition.name)}
                        />
                        <div className="flex flex-col gap-[6px]">
                            <Button rounded={true} disabled={processing}>
                                {processing ? "Đang đăng ký..." : "Đăng ký"}
                            </Button>
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

export default Register;
