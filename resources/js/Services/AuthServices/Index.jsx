import { useForm as useReactHookForm } from "react-hook-form";

const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
} = useReactHookForm({
    mode: "onChange",
    reValidateMode: "onSubmit",
});

export const createField = (
    name,
    validationRules,
    errorsReactHook,
    errorsInertia
) => {
    return {
        register: validationRules,
        status:
            errorsReactHook?.[name] || errorsInertia?.[name]
                ? "error"
                : "success",
        message: errorsReactHook?.[name]?.message || errorsInertia?.[name],
    };
};

export const fieldEmail = {
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

export const fieldPassword = {
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

export const fieldPhone = {
    register: register("phone", {
        required: "Vui lòng nhập số điện thoại",
        valueAsNumber: "Vui lòng nhập trường này là số",
        minLength: {
            value: 9,
            message: "Vui lòng nhập ít nhất 9 số",
        },
        maxLength: {
            value: 11,
            message: "Vui lòng nhập nhiều nhất 11 số",
        },
    }),
    status: errors?.phone || errorsInertia?.phone && "error",
    message: errors?.phone?.message || errorsInertia?.phone,
};