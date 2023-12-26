import logo from './logo.svg';
import './App.css';
import Card from './componets/ProfileCard/Card';
 import alexaImg from './componets/assets/images/alexa.png';
 import cortana  from './componets/assets/images/cortana.png';
 import siri from './componets/assets/images/siri.png';
function App() {
  return (
    <div>
      <h1 class="text-center m-3"> personal digital assistant</h1>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <Card title="alexa" handle ="@alexa123" image={alexaImg} />
    </div>
    <div class="col">
    <Card title="cortana" handle ="@cortana321" image={ cortana}/>
    </div>
    <div class="col">
    <Card title="siri" handle ="@siri789" image={siri}/>
    </div>
  </div>
</div>

    </div>
    
  );
}

export default App;
