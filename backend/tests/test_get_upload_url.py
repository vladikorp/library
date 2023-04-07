import os
import boto3
from   botocore.client import Config

# ttl    = int(os.environ['URL_DEFAULT_TTL'])
# bucket = os.environ['S3_BUCKET']

ttl = 60
bucket = 'library-bucket-dev'

def get_upload_url(key):
    client = boto3.client('s3', config=Config(signature_version='s3v4'))
    
    result = client.generate_presigned_post(
        Bucket=bucket,
        Key=key,
        ExpiresIn=ttl)

    return result

def test_get_upload_url():
    filename = 'test'
    upload_url = get_upload_url(filename)

    print(upload_url)