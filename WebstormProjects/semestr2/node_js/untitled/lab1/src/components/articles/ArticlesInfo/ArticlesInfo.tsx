import { Post } from '@/types/posts';

export interface ArticlesInfoProps {
    articles: Post[];
}

export const ArticlesInfo: React.FC<ArticlesInfoProps> = ({ articles }) => {
    return (
        <div>
            <h2 className="text-center text-4xl">
                Articles
            </h2>
            <p className="text-center">
                total: {articles.length}
            </p>
        </div>
    );
};