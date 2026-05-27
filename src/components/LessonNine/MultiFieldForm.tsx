import {useState} from "react";
import * as React from "react";

type FormValues = {
    name: string,
    email: string,
    message: string,
}

const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldForm = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = React.useState<FormValues | null>(null);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    }

    const handleClear = () => {
        setValues(initialValues);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedData(values)
        setValues(initialValues)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-4">
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Type your Name"
                    className="w-full border rounded px-4 py-2"
                />

                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Type your Email"
                    className="w-full border rounded px-4 py-2"
                />

                <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Type your Message"
                    className="w-full border rounded px-4 py-2"
                    minLength={5}
                ></textarea>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-cf-dark-red text-white px-4 py-2 rounded">
                        Submit
                    </button>
                    <button
                        onClick={handleClear}
                        className="bg-cd-dark-gray text-white px-4 py-2 rounded">
                        Clear
                    </button>
                </div>
            </form>

            {submittedData && (
                <>
                    <div className="mt-6 max-w-md mx-auto border-t space-y-2 pt-2">
                        <p><strong>Name:</strong>{submittedData.name}</p>
                        <p><strong>Email:</strong>{submittedData.email}</p>
                        <p><strong>Message: </strong>{submittedData.message}</p>
                    </div>
                </>
            )}
        </>
    )
}

export default MultiFieldForm