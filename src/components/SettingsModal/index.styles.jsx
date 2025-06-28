import styled, { keyframes } from "styled-components";

// Styled Components

export const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(-20px);}
    to { opacity: 1; transform: translateY(0);}
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 32px 28px 24px 28px;
    max-width:50%;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    animation: ${fadeIn} 0.25s;
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    background: transparent;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    color: #888;
    &:hover { color: #222; }
`;

export const Title = styled.h2`
    margin: 0 0 18px 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #222;
`;

export const Section = styled.div`
    margin-bottom: 22px;
`;

export const Label = styled.div`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 8px;
    color: #444;
`;

export const TagButton = styled.button`
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 6px 14px;
    border-radius: 16px;
    border: 1.5px solid ${({ selected }) => (selected ? "#0078d4" : "#ccc")};
    background: ${({ selected }) => (selected ? "#e6f0fa" : "#f7f7f7")};
    color: ${({ selected }) => (selected ? "#0078d4" : "#333")};
    font-size: 0.97rem;
    cursor: pointer;
    transition: all 0.15s;
    &:hover {
        border-color: #0078d4;
        background: #e6f0fa;
        color: #0078d4;
    }
`;

export const InputRow = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    flex: 1;
    padding: 7px 10px;
    border-radius: 6px;
    border: 1.2px solid #ccc;
    font-size: 1rem;
    &:focus { border-color: #0078d4; outline: none; }
`;

export const AddButton = styled.button`
    border-radius: 6px;
    border: none;
    background: #0078d4;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    &:hover { background: #005fa3; }
`;

export const AuthorTag = styled.span`
    display: inline-flex;
    align-items: center;
    background: #f0f6fa;
    color: #0078d4;
    border-radius: 14px;
    padding: 4px 10px 4px 12px;
    margin: 0 8px 8px 0;
    font-size: 0.97rem;
`;

export const RemoveButton = styled.button`
    background: transparent;
    border: none;
    color: #888;
    margin-left: 6px;
    font-size: 1.1rem;
    cursor: pointer;
    &:hover { color: #d32f2f; }
`;

export const SaveButton = styled.button`
    width: 100%;
    margin-top: 10px;
    padding: 10px 0;
    border-radius: 8px;
    border: none;
    background: #0078d4;
    color: #fff;
    font-size: 1.08rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
    &:hover { background: #005fa3; }
`;