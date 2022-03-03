import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";

interface IPostFiltersFormProps {
    onSubmit: any;
}

function PostFiltersForm(props: IPostFiltersFormProps) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState<string>("");
    const typingTimeoutRef: { current: NodeJS.Timeout | null } = useRef(null);

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (!onSubmit) return;

        // debounce
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };

            onSubmit(formValues);
        }, 300);
    };

    return (
        <form autoComplete="off">
            <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

export default PostFiltersForm;
