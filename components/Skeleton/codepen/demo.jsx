const { Component } = React;
const { Skeleton } = zds;

class App extends Component {
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Skeleton 骨架屏</h1>
                </div>
                <div className='zzc-demo-body'>
                    <h5>基本使用</h5>
                    <Skeleton>
                        <Skeleton.Box>
                            <Skeleton.Item height='34px' width='222px' />
                        </Skeleton.Box>
                        <Skeleton.Box align='center' style={{ marginTop: '20px' }}>
                            <Skeleton.Item height='150px' width='100px' />
                            <Skeleton.Box direction='column' style={{ marginLeft: '20px', width: '100%' }}>
                                <Skeleton.Item style={{ marginBottom: '10px' }} height='34px' />
                                <Skeleton.Item style={{ marginBottom: '10px' }} height='34px' />
                                <Skeleton.Item style={{ marginBottom: '10px' }} height='34px' />
                            </Skeleton.Box>
                        </Skeleton.Box>
                        <Skeleton.Box style={{ marginTop: '20px' }}>
                            <Skeleton.Item height='34px' width='100%' />
                        </Skeleton.Box>
                    </Skeleton>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)