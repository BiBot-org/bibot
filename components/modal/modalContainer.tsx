export default function ModalContainer(props: { children: React.ReactNode }) {
  return (
    <div
      style={{
        zIndex: 110,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "white",
        overflow: "auto",
      }}
    >
      {props.children}
    </div>
  );
}
