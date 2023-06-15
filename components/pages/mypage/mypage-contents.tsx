"use client";
import { Spacer } from "@nextui-org/react";
import Account from "./Account";
import Service from "./Service";
import Setting from "./Setting";
import ProfileInfoModal from "../profile/ProfileInfoModal";
import { useState } from "react";

export default function MypageContent() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <ProfileInfoModal isModalOpen={modalOpen} setIsModalOpen={setModalOpen} />
      <div onClick={() => setModalOpen(true)}>
        <Account />
      </div>
      <Spacer y={1} />
      <Service />
      <Spacer y={2} />
      <Setting />
    </>
  );
}
