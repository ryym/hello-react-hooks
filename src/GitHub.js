import React, { useState, useEffect } from 'react';

const fetchRepos = async username => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return await res.json();
};

// 関連する状態と Effect を1つの Hook として持てるのは面白い。
// ただ状態変化の追いやすさを考えたら dispatch のような一元化は必要そう。
const useRepos = username => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      if (username === '') {
        setRepos([]);
        return;
      }

      setLoading(true);

      // useEffect のコールバックは Promise を返せないので、
      // async/await が使えない。。
      fetchRepos(username).then(repos => {
        setRepos(repos);
        setLoading(false);
      });
    },
    [username]
  );

  return { repos, loading };
};

export const GitHub = () => {
  const [username, setUsername] = useState({ input: '', search: '' });
  const { repos, loading } = useRepos(username.search);

  const handleInput = event => {
    setUsername({
      input: event.target.value,
      search: username.search,
    });
  };

  const handleSearch = () => {
    setUsername({
      input: username.input,
      search: username.input,
    });
  };

  return (
    <div>
      <input onChange={handleInput} value={username.input} />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <div>Loading repositories...</div>
      ) : (
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>{repo.full_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
