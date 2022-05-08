import { useState } from 'react';
import axios from 'axios';
import './styles.css';
import React from 'react';

function App() {

    const [broker1, setBroker1] = useState('')
    const [broker2, setBroker2] = useState('')
    const [broker3, setBroker3] = useState('')
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')
    const [topic, setTopic] = useState('')
    const [numsg, setNumMessage] = useState('')
    const [filter, setFilter] = useState('')
    const [result, setResult] = useState('')
  const url = "http://localhost:3000/api/v1/messages-kafka"

  function getAPI() {
    axios.post(url, {kafkaTopic: topic, numberMessagesExpected: numsg, filterValue: filter, brokers: [broker1, broker2, broker3]},
      { headers: { username: username, password: password }}

    ).then(response => {
      setResult(response)
    })
  }

  return (

    <div className="containerTeste">
      <h1 className="title">Kafka Messages</h1>

      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="main.js"></script>


      <h2 className="title2">Brokers:</h2>

      <div class="containerInputBrokers">
        <div class="containerInputInner"> <input type="text" placeholder="Broker 1..."
          value={broker1}
          onChange={(e) => setBroker1(e.target.value)}
        /></div>

        <div class="containerInputInner"> <input type="text" placeholder="Broker 2..."
          value={broker2}
          onChange={(e) => setBroker2(e.target.value)}
        /></div>

        <div class="containerInputInner"> <input type="text" placeholder="Broker 3..."
          value={broker3}
          onChange={(e) => setBroker3(e.target.value)}
        /></div>
      </div>

      <h2 className="title2">Credentials:</h2>

      <div className="containerInput">
        <input type="text" placeholder="User"
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="containerInput">
        <input type="text" placeholder="Password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <h2 className="title2">Topic:</h2>

      <div className="containerInputBrokers">
        <div class="containerInputTopic">
          <input type="text" placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)} />
        </div>
      </div>

      <h2 className="title2">Number Of Messages:</h2>

      <div className="containerInputBrokers">
        <div class="containerInputTopic"> <input type="text" placeholder="Insert a field for search in Kafka messages"
          value={numsg}
          onChange={(e) => setNumMessage(e.target.value)} />
        </div>
        </div>

      <h2 className="title2">Filter:</h2>

      <div className="containerInputBrokers">
        <div class="containerInputTopic"> <input type="text" placeholder="Insert a field for search in Kafka messages"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}/>
        </div>

        <div className="containerButton">
          <button type="button" class="btn btn-secondary btn-lg" onClick={getAPI}>Find</button>
        </div>
      </div>

      <h2 className="title2">Results:</h2>
      <div class="card">
      <div class="card-body">
      <pre>
      {JSON.stringify(result, null, 2)}
      </pre>
      </div>
</div>
    </div>
  );
}

export default App;
