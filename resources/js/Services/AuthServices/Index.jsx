
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
