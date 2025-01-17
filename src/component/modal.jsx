/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const GithubModal = ({ showModal, onClose }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/github-john-doe');
      const result = await response.json();
      setData(result);
    };

    if (showModal) {
      fetchData();
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <>
      <Button variant="danger" >En savoir plus</Button>
      <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mon Profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data ? (
            <div>
              <h5>{data.name}</h5>
              <p><i className="bi bi-person"></i> {data.login}</p>
              <p><strong>Bio :</strong> {data.bio}</p>
              <p><strong>Followers :</strong> {data.followers}</p>
              <p><strong>Following :</strong> {data.following}</p>
              <p><strong>Repos publics :</strong> {data.public_repos}</p>
              <p><strong>Blog :</strong> <a href={data.blog} target="_blank" rel="noopener noreferrer">{data.blog}</a></p>
              <p><strong>Location :</strong> {data.location || 'Non spécifiée'}</p>
              <p><strong>Twitter :</strong> <a href={`https://twitter.com/${data.twitter_username}`} target="_blank" rel="noopener noreferrer">{data.twitter_username}</a></p>
              <p><strong>Créé le :</strong> {new Date(data.created_at).toLocaleDateString()}</p>
              <img src={data.avatar_url} alt="Avatar" className="img-fluid rounded-circle" style={{ width: '100px' }} />
            </div>
          ) : (
            <p>Chargement des données...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GithubModal;