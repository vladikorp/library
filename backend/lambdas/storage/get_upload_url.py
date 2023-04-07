import os
import boto3

from botocore.client import Config
from lambdas.lambda_wrappers import json_dumps, cors_headers

ttl    = int(os.environ['URL_DEFAULT_TTL'])
bucket = os.environ['S3_BUCKET']

def get_upload_url(key):
    client = boto3.client('s3', config=Config(signature_version='s3v4'))
    
    result = client.generate_presigned_post(
        Bucket=bucket,
        Key=key,
        ExpiresIn=ttl)

    return result

@json_dumps
@cors_headers
def lambda_handler(event, context):
    body = event['queryStringParameters']

    filename = body.get('filename')

    if not all([filename]):
        raise ValueError("Missing required parameters")
    
    upload_url = get_upload_url(filename)

    return {"statusCode": 200, "body": {
        "upload_url": upload_url,
        "uri"       : f's3://{bucket}/{filename}',
        }
    }