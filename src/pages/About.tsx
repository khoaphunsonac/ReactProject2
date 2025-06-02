export default function About() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            background: '#f5f6fa',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: '40px'
        }}>
            <h1 style={{ color: '#2d3436', marginBottom: '16px' }}>Giới thiệu về trang quản lý học sinh</h1>
            <p style={{ color: '#636e72', fontSize: '18px', maxWidth: '600px', textAlign: 'center' }}>
                Đây là website được xây dựng nhằm mục đích quản lý học sinh một cách hiệu quả và hiện đại. 
                Trang web hỗ trợ các chức năng như quản lý thông tin học sinh, theo dõi quá trình học tập, 
                và giúp giáo viên, nhà trường dễ dàng quản lý dữ liệu. Ứng dụng sử dụng công nghệ React để đảm bảo trải nghiệm mượt mà và thân thiện với người dùng.
            </p>
        </div>
    );
}
