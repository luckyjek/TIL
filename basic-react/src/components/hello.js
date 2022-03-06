import React,{Component} from 'react';

class Hello extends Component{
    static defaultProps = {
        name:'이름없음',
    };    
    
        render(){
            const {color, isSpecial, name} = this.props;
            return (
                <div style={{color}}>
                    {isSpecial && <b>*</b>}
                    안녕하세요{name}
                </div>
            )
        }
    }
// function Hello({color,name, isSpecial}) {
//     //false값들은 다 안나타나는데 그중 0 예외.
//     return( 
//     <div style={{color:color}}>
//         {isSpecial && <b>*</b>}
//         안녕하세요 {name}< /div>
//     );
// }

// Hello.defaultProps = {
//     name:'이름없음'
//   }
export default Hello;