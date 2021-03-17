import React from 'react';

const Input = (props) => {
    return (
        <div className={props.colspan}>
            <div className="flex justify-between">
                <label htmlFor={props.name} className="block text-sm font-medium text-warm-gray-900">{props.label}</label>
                {
                    props.message
                        ? <span id="phone-optional" className="text-sm text-warm-gray-500">{props.message}</span>
                        : ''
                }
            </div>

            <div className="mt-1">
                <input
                    type={props.type}
                    name={props.name}
                    id={props.name}
                    autoComplete={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    className={'py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'}
                />
            </div>
            {
                props.errors && props.touched
                    ? <span className="text-red-700">{props.errors}</span>
                    : null
            }
        </div>
    );
};

export default Input;
