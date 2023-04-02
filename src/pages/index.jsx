import ReactLoading from 'react-loading';

export default function Loading() {

    return (
        <div style={{display: 'flex', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
            <ReactLoading type={'spin'} color={"#0000006e"} height={50} width={50} />
        </div>
    )
}

export const getServerSideProps = async () => {
    return {redirect: {destination: '/Eduardo', permanent: false}}
}