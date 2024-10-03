import InputText from "@/Components/Inputs/InputText";
import {
    HiEye,
    HiEyeOff,
} from "react-icons/hi";

function FieldConfirmPassword({ register, errors, errorsInertia, trigger, handleIconConfirm, showConfirmPassword, password }) {
    const field = {
        register: register("password_confirmation", {
            required: "Vui lòng nhập lại mật khẩu",
            minLength: {
                value: 8,
                message: "Vui lòng nhập ít nhất 8 ký tự",
            },
            validate: (value) =>
                value === password || "Mật khẩu không khớp",
        }),
        status: errors?.password_confirmation || (errorsInertia?.password_confirmation && "error"),
        message: errors?.password_confirmation?.message || errorsInertia?.password_confirmation,
    };

    return (
        <InputText
            label="Xác nhận mật khẩu"
            placeholder="Nhập lại mật khẩu ..."
            type={showConfirmPassword ? "text" : "password"}
            register={field.register}
            status={field.status}
            message={field.message}
            handleIcon={handleIconConfirm}
            required
            onBlur={() => trigger("password_confirmation")}
            iconRight={true}
            icon={showConfirmPassword ? HiEye : HiEyeOff}
        />
    );
}

export default FieldConfirmPassword;
