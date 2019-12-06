import React from 'react';

// export default function DetailUI(props: any) {
//     return (
//         <div className="detail-ui-wrapper">
//             DetailUI
//         </div>
//     )
// }
interface DetailProps {
    name: string,
}

export type DetailState = typeof propsForStatic;

const propsForStatic =  "propsForStatic"

export default class Detail extends React.Component<DetailProps, any> {
    static propsForStatic = propsForStatic;
    static defaultProps = {
        name: "我美不美"
    }
    render() {
        return (
            <div className="detail-ui-wrapper">
                DetailUI
                {this.props.name}
            </div>
        )
    }
}