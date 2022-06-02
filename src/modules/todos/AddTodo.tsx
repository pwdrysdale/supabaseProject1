import {useState} from 'react';
import {supabase} from "../../lib/api";

const AddTodo = () => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await supabase.from('todos').insert({
            title: value
        })

        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo