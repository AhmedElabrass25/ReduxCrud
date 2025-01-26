
const Loading = () => {
  return (
    <>
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            position: "fixed",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            zIndex: "9999",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <i className="fas fa-spinner fa-spin text-[50px] text-white"></i>
        </div></>
  )
}

export default Loading