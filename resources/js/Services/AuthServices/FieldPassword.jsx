import InputText from "@/Components/Inputs/InputText";
import {
    HiEye,
    HiEyeOff,
} from "react-icons/hi";

function FieldPassword({ register, errors, errorsInertia, trigger, handleIcon, showPassword }) {
    const field = {
        register: register("password", {
            required: "Vui lòng nhập mật khẩu",
            minLength: {
                value: 8,
                message: "Vui lòng nhập ít nhất 8 ký tự",
            },
        }),
        status: errors?.password || (errorsInertia?.password && "error"),
        message: errors?.password?.message || errorsInertia?.password,
    };

    return (
        <InputText
            label="Mật khẩu"
            placeholder="Nhập mật khẩu ..."
            type={showPassword ? "text" : "password"}
            register={field.register}
            status={field.status}
            message={field.message}
            handleIcon={handleIcon}
            required
            classes="mb-3"
            onBlur={() => trigger("password")}
            iconRight={true}
            icon={showPassword ? HiEye : HiEyeOff}
        />
    );
}

export default FieldPassword;
