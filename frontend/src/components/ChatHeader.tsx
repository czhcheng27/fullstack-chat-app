import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const { t } = useTranslation();

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 relative overflow-visible">
              <img
                src={selectedUser?.profilePic || "/avatar.png"}
                alt={selectedUser?.fullName}
                className="rounded-full object-cover w-full h-full"
              />
              {selectedUser?.isOnline && (
                <span
                  className="absolute bottom-1 right-1 translate-x-1/4 translate-y-1/4 size-3 bg-green-500 
        rounded-full ring-2 ring-zinc-900"
                />
              )}
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser?.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {t(
                onlineUsers.includes(selectedUser?._id ?? "")
                  ? "online"
                  : "offline"
              )}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setSelectedUser(null)}
        >
          <X />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
