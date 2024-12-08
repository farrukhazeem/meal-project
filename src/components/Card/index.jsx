import React from 'react';
import RatingStar from '/rating-star.svg';
import { FiTrash } from 'react-icons/fi';

export default function Card({
    title = "", description = "", imgUrl = "", mealType = [],
    cuisine = "", rating = 0,
    isSelected, onSelectItem, showDeleteIcon,onDeleteItem
}) {
    return (
        <div
            className={`relative bg-white shadow-md rounded-lg p-6 z-10 cursor-pointer 
    ${isSelected ? 'border-2 border-[#004370]' : ''}`}
            onClick={onSelectItem} 
        >
            <div className="relative">
            {showDeleteIcon && (
    <span className="absolute top-2 left-2 bg-pink-100 text-pink-600 text-xs p-2"
    onClick={(e) => {
        e.stopPropagation(); 
        onDeleteItem();
    }}
    >
            <FiTrash size={16} />
                </span>   )}

                <img
                    className="rounded-lg"
                    src={imgUrl}
                    alt={title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                />
                {mealType.length > 0 && (
                    <span className="absolute top-2 right-2 bg-black text-white text-xs rounded-xs px-6 py-0">
                        {mealType[0] || ""}
                    </span>
                )}
            </div>
            <div className="my-4">
                <h3 className="text-lg text-neutral-950 font-bold mb-3">{title}</h3>
                <p className="text-sm text-gray-800 line-clamp">{description}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-800">
                <div>
                    <strong>Cuisine: </strong>
                    <span>{cuisine} </span>
                </div>
                <div className="flex gap-2">
                    <strong>Rating: </strong>
                    <span> {rating} </span>
                    <div className="flex gap-1">
                        {Array.from({ length: Math.floor(rating) }, (_, index) => index + 1).map(r => (

                            <img src={RatingStar} width="14px" height="14px" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

