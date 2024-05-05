import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

function Principal() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
      if (userDoc.exists()) {
        setUser(userDoc.data());
      }
    };

    if (auth.currentUser) {
      fetchUserData();
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Nome: {user.nome}</p>
          <p>Sobrenome: {user.sobrenome}</p>
          <p>Data de Nascimento: {user.dataNasc}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Principal;
