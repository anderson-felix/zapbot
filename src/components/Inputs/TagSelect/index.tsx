import { ITagSelectInputProps } from './interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';

import {
  Container,
  ActionTagButton,
  InputArea,
  TagArea,
  SuggestionsModal,
} from './styles';
import { SimpleTextInput } from '../SimpleText';
import { ColorInput } from '../Color';
import { IChatTag } from '../../../interfaces/chat/IChatTag';
import { useToast } from '../../../hooks/Toast';
import { TagChat } from '../../TagChat';

const defaultTag = { color: '#000000', text: '' };

const tag2string = (tag: IChatTag): string => JSON.stringify(tag);

export const TagSelectInput: React.FC<ITagSelectInputProps> = ({
  label,
  onTagsChanged,
  tags = [],
  suggestions = [],
}) => {
  const { addToast } = useToast();
  const [newTag, setNewTag] = useState<IChatTag>(defaultTag);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return () => ({});

    const handleClick = (e: any) => {
      if (e.target !== modalRef.current && e.toElement.id !== 'chat-tag')
        setShowSuggestions(false);
    };

    ref.addEventListener('mousedown', handleClick);
    ref.addEventListener('touchstart', handleClick);

    return () => {
      ref.removeEventListener('mousedown', handleClick);
      ref.removeEventListener('touchstart', handleClick);
    };
  }, []);

  const handleTagCreate = (t?: IChatTag) => {
    const targetTag = t || newTag;
    if (!targetTag.text) return;

    const sameTag = tags.find(tag => tag2string(tag) === tag2string(targetTag));

    if (sameTag) {
      addToast({ type: 'error', title: 'Essa tag já foi adicionada' });
      return;
    }

    onTagsChanged([...tags, targetTag]);
    setNewTag({ ...newTag, text: '' });
  };

  const handleTagRemove = (tag: IChatTag) =>
    onTagsChanged(tags.filter(t => tag2string(t) !== tag2string(tag)));

  return (
    <Container ref={containerRef}>
      <InputArea>
        <SimpleTextInput
          label={label}
          value={newTag.text}
          onChange={text => setNewTag({ ...newTag, text })}
          placeholder="Nova tag"
          onEnter={handleTagCreate}
        />
        <ColorInput
          onColorChange={color => setNewTag({ ...newTag, color })}
          color={newTag.color}
          onEnter={handleTagCreate}
        />
        {!!suggestions.length && (
          <ActionTagButton
            onClick={() => setShowSuggestions(!showSuggestions)}
            data-more
            title="Minhas tags"
          >
            <CgDetailsMore />
          </ActionTagButton>
        )}
        <ActionTagButton onClick={() => handleTagCreate()} title="Criar tag">
          <BsCheckLg />
        </ActionTagButton>
        <SuggestionsModal show={showSuggestions} ref={modalRef}>
          {suggestions.map((tag, idx) => (
            <TagChat
              key={`${tag}-${idx}`}
              tag={tag}
              onTagClick={t => handleTagCreate(t)}
            />
          ))}
        </SuggestionsModal>
      </InputArea>
      <TagArea>
        {tags.map((tag, idx) => (
          <TagChat
            key={`${tag}-${idx}`}
            tag={tag}
            onTagRemove={handleTagRemove}
          />
        ))}
      </TagArea>
    </Container>
  );
};
