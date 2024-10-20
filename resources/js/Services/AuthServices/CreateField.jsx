const CreateField = ({ name, register, errors, errorsInertia, validationRules }) => {
    return {
        register: register(name, validationRules),
        status: errors?.[name] || (errorsInertia?.[name] && "error"),
        message: errors?.[name]?.message || errorsInertia?.[name],
    };
};


export default CreateField;