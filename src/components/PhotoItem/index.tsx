import * as C from './styled';

type Props = {
    name: string;
    url: string;
};

export const PhotoItem = ({ url, name}: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    )
};

export default PhotoItem;