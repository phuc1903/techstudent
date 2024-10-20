import InputText from "@/Components/Inputs/InputText";

export default function FieldEmail({
    register,
    errors,
    errorsInertia,
    trigger,
}) {
    const field = {
        register: register("email", {
            required: "Vui lòng nhập email",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Vui lòng nhập địa chỉ email hợp lệ",
            },
        }),
        status: (errors?.email || errorsInertia?.email) && "error",
        message: errors?.email?.message || errorsInertia?.email,
    };

    return (
        <InputText
            name="email"
            label="Email"
            placeholder="Email address ..."
            type="email"
            register={field.register}
            status={field.status}
            message={field.message}
            required
            classes="mb-3"
            onBlur={() => trigger("email")}
        />
    );
}
