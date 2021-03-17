import React from 'react';

const Textarea = (props) => {
    return (
        <div className={props.colspan}>
            <div className="flex justify-between">
                <label htmlFor={props.name} className="block text-sm font-medium text-warm-gray-900">{props.label}</label>
                <span className="text-sm text-warm-gray-500">{props.message}</span>
            </div>
            <div className="mt-1">
                    <textarea
                        id={props.name}
                        name={props.name}
                        rows="4"
                        value={props.value}
                        onChange={props.onChange}
                        className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                    />
            </div>
        </div>
    );
};

export default Textarea;
