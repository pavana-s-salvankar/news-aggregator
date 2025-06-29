import { useState, useEffect } from "react";
import {
  AddButton,
  AuthorTag,
  CloseButton,
  Input,
  InputRow,
  Label,
  ModalContainer,
  ModalOverlay,
  RemoveButton,
  SaveButton,
  Section,
  TagButton,
  Title,
} from "./index.styles";
import { CATEGORIES, SOURCES } from "../../constants";

const LOCAL_STORAGE_KEY = "newsAggregatorPreferences";

const SettingsModal = ({ open, onClose, onSave }) => {
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    if (open) {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        try {
          const prefs = JSON.parse(stored);
          setSelectedSource(prefs.source || "");
          setSelectedCategory(prefs.category || "");
          setAuthors(prefs.authors || []);
        } catch {}
      }
    }
  }, [open]);

  const toggleSelection = (e, item, selected, setSelected) => {
    e.preventDefault();
    setSelected(selected === item ? "" : item);
    console.log(selectedCategory, selectedSource);
  };

  const addAuthor = (e) => {
    e.preventDefault();
    if (newAuthor.trim() && !authors.includes(newAuthor.trim())) {
      setAuthors([...authors, newAuthor.trim()]);
      setNewAuthor("");
    }
  };

  const removeAuthor = (e, author) => {
    e.preventDefault();
    setAuthors(authors.filter((a) => a !== author));
  };

  const handleSave = () => {
    const preferences = {
      source: selectedSource,
      category: selectedCategory,
      authors,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(preferences));
    window.location.reload();
    onSave && onSave(preferences);
    onClose && onClose();
  };

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton aria-label="Close" onClick={onClose}>
          ✕
        </CloseButton>
        <Title>🛠️ Personalize Your Feed</Title>

        <Section>
          <Label>Preferred Sources</Label>
          {SOURCES.map(({ value, label }) => (
            <TagButton
              key={value}
              onClick={(e) =>
                toggleSelection(e, value, selectedSource, setSelectedSource)
              }
              selected={selectedSource === value}
            >
              {label}
            </TagButton>
          ))}
        </Section>

        <Section>
          <Label>Preferred Categories</Label>
          {CATEGORIES.map(({ value, label }) => (
            <TagButton
              key={value}
              onClick={(e) =>
                toggleSelection(e, value, selectedCategory, setSelectedCategory)
              }
              selected={selectedCategory === value}
            >
              {label}
            </TagButton>
          ))}
        </Section>

        <Section>
          <Label>Preferred Authors</Label>
          <InputRow>
            <Input
              type="text"
              placeholder="Add author name..."
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addAuthor();
              }}
            />
            <AddButton onClick={(e) => addAuthor(e)}>Add</AddButton>
          </InputRow>
          <div>
            {authors.map((author) => (
              <AuthorTag key={author}>
                {author}
                <RemoveButton onClick={(e) => removeAuthor(e, author)}>
                  ✕
                </RemoveButton>
              </AuthorTag>
            ))}
          </div>
        </Section>

        <SaveButton onClick={handleSave}>💾 Save Preferences</SaveButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SettingsModal;
