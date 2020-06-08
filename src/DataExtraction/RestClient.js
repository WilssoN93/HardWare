import React from 'react';
import "../CSS/Computer.css"
import ErrorPage from '../Pages/ErrorPage';


export default class RestClient extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:[],
      statusCode:0,
      loading:true,
      budget:props.budget
    };

  }


  

  async componentDidMount(){

    const url = "http://localhost:8080/computer/" + this.state.budget;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      data:data,
      statusCode:response.status
    })
    console.log(response)
    if(this.state.statusCode >= 500){
      this.setState({
        failed:true
      })
    }
    this.setState({
      loading:false
    })
  }

  render(){
    return(
      <div className="computer-content">
      {
       this.state.loading ? <div className="loading">Loading...</div> : this.state.failed ? <ErrorPage/> : <div className="content-container">
        <a href={this.state.data.gpu.url} className="text-box">
            <div className="computer-container"><img className="image-content" alt="Graphics Card" src={this.state.data.gpu.imgUrl}></img></div>
            <div className="computer-container">
              <p className="computer">Name: {this.state.data.gpu.name}</p>
              <p className="computer">Core Clockspeed: {this.state.data.gpu.coreClock} Mhz</p>
              <p className="computer">Boost Clockspeed: {this.state.data.gpu.boostClock} Mhz</p>
              <p className="computer">Cuda Cores: {this.state.data.gpu.cudaCores} st</p>
              <p className="computer">Power Connection: {this.state.data.gpu.connection}</p>
              <p className="computer">Recomended Capacity for Power Supply: {this.state.data.gpu.capacity} Watt</p>
              <p className="computer">Price: {this.state.data.gpu.price} kr</p>
            </div>
          </a>
          <a href={this.state.data.cpu.url} className="text-box">
            <div className="computer-container"><img className="image-content" alt="Processor" src={this.state.data.cpu.imgUrl}></img></div>
            <div className="computer-container">
              <p className="computer">Name: {this.state.data.cpu.name}</p>
              <p className="computer">Core Clockspeed: {this.state.data.cpu.coreClock} Ghz</p>
              <p className="computer">Boost Clockspeed: {this.state.data.cpu.boostClock} Ghz</p>
              <p className="computer">Number of Threads: {this.state.data.cpu.threads} st</p>
              <p className="computer">Number of Cores: {this.state.data.cpu.cores} st</p>
              <p className="computer">Cpu Socket: {this.state.data.cpu.socket}</p>
              <p className="computer">Price: {this.state.data.cpu.price} kr</p>
            </div>
        </a>
        <a href={this.state.data.motherBoard.url} className="text-box">
          <div className="computer-container"><img className="image-content" alt="Motherboard" src={this.state.data.motherBoard.imgUrl}></img></div>
          <div className="computer-container">
            <p className="computer">Name: {this.state.data.motherBoard.name}</p>
            <p className="computer">Cpu Socket: {this.state.data.motherBoard.socket}</p>
            <p className="computer">Formfactor: {this.state.data.motherBoard.formFactor}</p>
            <p className="computer">Supported Ram: {this.state.data.motherBoard.supportedRam} </p>
            <p className="computer">Ram Speeds: {this.state.data.motherBoard.speeds}Mhz</p>
            <p className="computer">Number of M.2 Slots: {this.state.data.motherBoard.mdot2} st</p>
            <p className="computer">Price: {this.state.data.motherBoard.price} kr</p>
          </div>
        </a>
        <a href={this.state.data.ram.url} className="text-box">
          <div className="computer-container"><img className="image-content" alt="RAM" src={this.state.data.ram.imgUrl}></img></div>
          <div className="computer-container">
            <p className="computer">Name: {this.state.data.ram.name}</p>
            <p className="computer">Memory Speed: {this.state.data.ram.speeds}Mhz</p>
            <p className="computer">Memory Type: {this.state.data.ram.ddr}</p>
            <p className="computer">Capacity: {this.state.data.ram.capacity} GB</p>
            <p className="computer">Price: {this.state.data.ram.price} kr</p>
          </div>
        </a>
        <a href={this.state.data.storage.url} className="text-box">
          <div className="computer-container"><img className="image-content" alt="Storage device" src={this.state.data.storage.imgUrl}></img></div>
          <div className="computer-container">
            <p className="computer"><strong>Name:</strong>{this.state.data.storage.name}</p>
            <p className="computer">Capacity: {this.state.data.storage.size} GB</p>
            <p className="computer">Type of Storagedevice: {this.state.data.storage.type}</p>
            <p className="computer">Read speed: {this.state.data.storage.readSpeed} MB/s</p>
            <p className="computer">Write speed: {this.state.data.storage.writeSpeed} MB/s</p>
            <p className="computer">Formfactor: {this.state.data.storage.formFaktor}</p>
            <p className="computer">Price: {this.state.data.storage.price} kr</p>
          </div>
        </a>
        <a href={this.state.data.psu.url} className="text-box">
          <div className="computer-container"><img className="image-content" alt="Power Supply" src={this.state.data.psu.imgUrl}></img></div>
          <div className="computer-container">
            <p className="computer">Name: {this.state.data.psu.name}</p>
            <p className="computer">Capacity: {this.state.data.psu.capacity} Watt</p>
            <p className="computer">Graphicscard Connection: {this.state.data.psu.gpuConnection}</p>
            {
              this.state.data.psu.modular ? <p className="computer">Is modular: Yes </p> : <p className="computer">Is modular: No </p>
            }
            <p className="computer">Formfactor: {this.state.data.psu.formFactor}</p>
            <p className="computer">Price: {this.state.data.psu.price} kr</p>
          </div>
        </a>
        <a href={this.state.data.chassi.url} className="text-box">
          <div className="computer-container"><img className="image-content" alt="Chassi" src={this.state.data.chassi.imgUrl}></img></div>
          <div className="computer-container">
            <p className="computer">Formfactor: {this.state.data.chassi.formFactor}</p>
            <p className="computer">Max graphicscard width: {this.state.data.chassi.maxGpuWidth}</p>
            <p className="computer">Max cpu cooler height: {this.state.data.chassi.maxHeightCpuCooler}</p>
            <p className="computer">Price: {this.state.data.chassi.price} kr</p>
          </div>
        </a>
        <h1>{this.state.data.totalPrice}</h1>
      </div>
      
      }
      </div>
    )
  }
}

