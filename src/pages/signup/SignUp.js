import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }

    if (!selected.type.includes('image')) {
      setThumbnailError('file must be an image');
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError('image size must not exceed 100kb');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log('Thumbail updated');
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label>
        <span>email:</span>
        <input
          required
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          required
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>display name:</span>
        <input
          required
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <span>profile thumbnail:</span>
        <input required type='file' onChange={handleFileChange} />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      <button className='btn'>Sign up</button>
    </form>
  );
};
export default SignUp;
