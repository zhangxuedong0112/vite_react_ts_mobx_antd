import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC<any> = (props) => {
    const {history} = props;

    return <Result
        status="404"
        title="404"
        subTitle="对不起，页面没找到。"
        extra={
            <Button type="primary" onClick={() => history.goBack()}>
                返回
            </Button>
        }
    />
};

export default NoFoundPage;
