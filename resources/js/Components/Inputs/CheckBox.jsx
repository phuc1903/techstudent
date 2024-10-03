import { Checkbox, Label } from "flowbite-react";

function CheckBox({ register, label, status, message, props }) {
    return (
        <div className="flex flex-col items-center justify-start gap-2">
            <div className="flex w-full gap-2">
                <Checkbox id="promotion" {...register} {...props}/>
                <Label htmlFor="promotion">{label}</Label>
            </div>  
            {status && (
            <span className="text-red-500 text-sm block w-full">
                {message}
            </span>
            )}
        </div>
    );
}

export default CheckBox;
