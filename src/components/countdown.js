import React, {Component} from 'react';

class CountHours extends Component{
	state={
		hours:0,
		minutes:0,
		seconds:0,
		hours1:0,
		minutes1:0,
		seconds1:0
	
	}

	onChangeHours=(e)=>{
		
		// console.log(e.target.value)
		this.setState({
			hours:e.target.value
		})

	}

	onChangeMinutes=(e)=>{
		this.setState({
			minutes:e.target.value
		})
	}

	onChangeSeconds=(e)=>{
		this.setState({
			seconds:e.target.value
		})
	}

	onHandleCalculate=()=>{ 
		let temp=setInterval(()=>{
			if(this.state.seconds===0)
			{
				if(this.state.minutes===0)
				{
					if(this.state.hours===0){

					}
					else{
						this.setState({
							hours:this.state.hours-1, minutes:59, seconds:60

						})
					}
				}
				else
				{
				this.setState({
					minutes:this.state.minutes-1, seconds:59
				})
			}

			}
			else
			{
				this.setState({
					seconds: this.state.seconds-1
				})
			}


		}, 1000)
		

	}

	

	render(){
		return(

			<div>
			
				Hours <input type="number" min="0" max="24" value={this.state.hours} onChange={this.onChangeHours} />
				Minutes <input type="number" min="0" max="60" value={this.state.minutes} onChange={this.onChangeMinutes} />
				Seconds <input type="number" min="0" max="60" value={this.state.seconds} onChange={this.onChangeSeconds}  />
				<button onClick={this.onHandleCalculate}> Calculate </button>
					<br/> <br/>
				<span> {this.state.hours}:hr {this.state.minutes}:mn {this.state.seconds}:sc </span>
				<button onClick={this.onHandleReset}> Reset </button>

					
			</div>
			)
	}
}

export default  CountHours;