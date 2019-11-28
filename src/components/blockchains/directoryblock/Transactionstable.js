import React, {Component} from "react";
import "antd/dist/antd.css";
import { Descriptions } from "antd";
import axios from 'axios';

class Transactionstable extends Component {

    constructor(props) {
        super(props);
        /* this.state={transactions:[]} */
        this.state={transactions_List:[{"transactionsId":"1911827",
                                "readWriteSet":"[{'key':'h[ash:5d549e8b851914fbbb6b06ffee916fb0695e782f9c16','value':'REJBMkI3QTk2NUQ5NEM1OEI3QkNFNDNGRkZDMDlCQ0Q='}]",
                                "createdTime":"2019-11-20 15:11:28"},
                                {"transactionsId":"2911827",
                                "readWriteSet":"[{'key':'hash:5d549e8b851914fbbb6b06ffee916fb0695e782f9c16','value':'REJBMkI3QTk2NUQ5NEM1OEI3QkNFNDNGRkZDMDlCQ0Q='}]",
                                "createdTime":"2019-11-20 15:11:28"},
                                {"transactionsId":"3911827",
                                "readWriteSet":"[{'key':'hash:5d549e8b851914fbbb6b06ffee916fb0695e782f9c16','value':'REJBMkI3QTk2NUQ5NEM1OEI3QkNFNDNGRkZDMDlCQ0Q='}]",
                                "createdTime":"2019-11-20 15:11:28"},
                                {"transactionsId":"4911827",
                                "readWriteSet":"[{'key':'hash:5d549e8b851914fbbb6b06ffee916fb0695e782f9c16','value':'REJBMkI3QTk2NUQ5NEM1OEI3QkNFNDNGRkZDMDlCQ0Q='}]",
                                "createdTime":"2019-11-20 15:11:28"}],
        }
      }
    
    //当组件输出到 DOM 后会执行 componentDidMount()
    /*   componentDidMount(){
        axios.post('')  //url
            .then(function (res) {
                this.setState({
                  transactions_List:res.data.transactions,
                })
            })
            .catch(function (err) {
                console.log(err);
            })
      }  */

    render() {
        let{ transactions_List } = this.state;
        for(let i = 0; i< transactions_List.length; i++){
            let transactions = transactions_List[i];
            return(
                <Descriptions bordered column={1}>
                    <Descriptions.Item label="Transactions Id:">{transactions.transactionsId}</Descriptions.Item>
                    <Descriptions.Item label="ReadWriteSet:">{transactions.readWriteSet}</Descriptions.Item>
                    <Descriptions.Item label="createdTime:">{transactions.createdTime}</Descriptions.Item>
                </Descriptions>
            )
        }
    }
}

export default Transactionstable;
