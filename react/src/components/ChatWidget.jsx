import React, { useEffect, useRef } from "react";
import { Popover } from "bootstrap";

import '../assets/styles/ChatWidget.css';

function ChatWidget(){
    const popoverRef = useRef();
    useEffect(() => {
        new Popover(popoverRef.current, {
            customClass: 'popOverClass1',
            trigger: 'click',
            placement: 'top',
            offset: [-100, 10],
            html: true,
            delay: {
                "show": 50,
                "hide": 50
            },
            sanitize: false,
            template: 	
            `<div class="popover" role="popover">
                <div class="title">Καλώς ήρθατε στο Chat</div>
                <textarea placeholder="Γράψτε το μήνυμά σας" class="border-secondary border mt-3 message ms-auto me-auto"></textarea>
                <span class="fw-bold mt-3 ms-auto me-auto">Συμπληρώστε το email σας</span>
                <input class="border border-secondary mt-3 email ms-auto me-auto" type="email"/>
                <button class="fw-bold bg-success text-light ms-auto me-auto send"><i class="bi bi-send-fill me-2"></i>Στείλτε το</button>
            </div>`
        })
    })
    return(
        <div className="chat">
            <div className="w-100 fixed-bottom bg-transparent chat-widget-container">
                <button ref={popoverRef} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover" className="chat-widget ms-auto me-3 text-light">
                        <i className="bi bi-chat-fill me-2"></i> Chat
                </button>
            </div>
        </div>
    );
}

export default ChatWidget;