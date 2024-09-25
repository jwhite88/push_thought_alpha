import React, { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tag-input">
      <ul className="tag-list">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            {tag}
            <span className="tag-close" onClick={() => removeTag(index)}>x</span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Press 'Enter' to add tags"
      />
      <style jsx>{`
        .tag-input {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          border: 1px solid #ccc;
          padding: 5px;
          border-radius: 4px;
        }

        .tag-list {
          display: flex;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .tag {
          background-color: #0070f3;
          color: white;
          padding: 5px 10px;
          margin-right: 5px;
          border-radius: 20px;
          display: flex;
          align-items: center;
        }

        .tag-close {
          margin-left: 8px;
          cursor: pointer;
        }

        input {
          border: none;
          outline: none;
          padding: 5px;
          flex-grow: 1;
          min-width: 100px;
        }
      `}</style>
    </div>
  );
};

export default TagInput;